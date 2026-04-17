import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { db, jobApplicationsTable, insertJobApplicationSchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

function requireAdminKey(req: Request, res: Response, next: NextFunction) {
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) {
    res.status(503).json({ error: "Admin access is not configured." });
    return;
  }

  const authHeader = req.headers["authorization"] ?? "";
  const providedKey = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!providedKey || providedKey !== adminKey) {
    res.status(401).json({ error: "Unauthorized. A valid admin API key is required." });
    return;
  }

  next();
}

router.post("/applications", async (req, res) => {
  const parsed = insertJobApplicationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data.", issues: parsed.error.issues });
    return;
  }

  const { name, email, expertise, cvUrl, message } = parsed.data;

  if (!name || !email) {
    res.status(400).json({ error: "Name and email are required." });
    return;
  }

  try {
    const [application] = await db
      .insert(jobApplicationsTable)
      .values({ name, email, expertise: expertise ?? null, cvUrl: cvUrl ?? null, message: message ?? null })
      .returning();

    res.status(201).json({ success: true, id: application.id });
  } catch (err) {
    console.error("Failed to save job application:", err);
    res.status(500).json({ error: "Failed to save your application. Please try again later." });
  }
});

router.get("/applications", requireAdminKey, async (_req, res) => {
  try {
    const applications = await db
      .select()
      .from(jobApplicationsTable)
      .orderBy(desc(jobApplicationsTable.submittedAt));

    res.json({ applications });
  } catch (err) {
    console.error("Failed to fetch applications:", err);
    res.status(500).json({ error: "Failed to retrieve applications." });
  }
});

export default router;
