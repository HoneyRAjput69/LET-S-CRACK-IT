import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  real,
} from "drizzle-orm/pg-core";

export const exams = pgTable("exams", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  fullName: text("full_name").notNull(),
  conductedBy: text("conducted_by").notNull(),
  force: text("force").notNull(), // Army / Navy / Air Force / Tri-Service / CAPF / Coast Guard
  eligibility: text("eligibility").notNull(),
  pattern: text("pattern").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  frequency: text("frequency").notNull(),
});

export const papers = pgTable("papers", {
  id: serial("id").primaryKey(),
  examId: integer("exam_id")
    .notNull()
    .references(() => exams.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  subject: text("subject").notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  marksPerQuestion: real("marks_per_question").notNull().default(1),
  negativeMarks: real("negative_marks").notNull().default(0.33),
  difficulty: text("difficulty").notNull().default("Moderate"),
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  paperId: integer("paper_id")
    .notNull()
    .references(() => papers.id, { onDelete: "cascade" }),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  question: text("question").notNull(),
  options: jsonb("options").$type<string[]>().notNull(),
  correctIndex: integer("correct_index").notNull(),
  explanation: text("explanation").notNull(),
  difficulty: text("difficulty").notNull().default("Moderate"),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  examId: integer("exam_id").references(() => exams.id, { onDelete: "set null" }),
  subject: text("subject").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(), // markdown-ish text
  readMinutes: integer("read_minutes").notNull().default(5),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
});

export const attempts = pgTable("attempts", {
  id: serial("id").primaryKey(),
  paperId: integer("paper_id")
    .notNull()
    .references(() => papers.id, { onDelete: "cascade" }),
  candidateName: text("candidate_name").notNull().default("Aspirant"),
  answers: jsonb("answers").$type<Record<string, number>>().notNull(),
  score: real("score").notNull(),
  maxScore: real("max_score").notNull(),
  correct: integer("correct").notNull(),
  wrong: integer("wrong").notNull(),
  skipped: integer("skipped").notNull(),
  timeTakenSeconds: integer("time_taken_seconds").notNull(),
  completed: boolean("completed").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Exam = typeof exams.$inferSelect;
export type Paper = typeof papers.$inferSelect;
export type Question = typeof questions.$inferSelect;
export type Note = typeof notes.$inferSelect;
export type Attempt = typeof attempts.$inferSelect;
