import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const article = defineCollection({
  loader: glob({
    pattern: ["**/*.{md,mdx}"],
    base: "./src/data/article",
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      source: z.string(),
      publishedDate: z.coerce.string(),
      description: z.string(),
      thumbnail: image(),
      categories: z.array(
        z.enum([
          "Article",
          "Press Release",
          "Social Media Content",
          "Fundraising Campaign",
          "DoCheck",
          "Insan Bumi Mandiri",
        ])
      ),
    }),
});

const release = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/data/press-release",
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      publishedDate: z.string(),
      description: z.string(),
      thumbnail: image(),
      tags: z.array(
        z.enum([
          "Article",
          "Press Release",
          "Social Media Content",
          "Fundraising Campaign",
          "DoCheck",
          "Insan Bumi Mandiri",
        ])
      ),
      releaseAt: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ),
    }),
});

const campaign = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/data/fundraising-campaign",
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      source: z.string(),
      description: z.string(),
      thumbnail: image(),
      totalDonation: z.string(),
      tags: z.array(
        z.enum([
          "Article",
          "Press Release",
          "Social Media Content",
          "Fundraising Campaign",
          "DoCheck",
          "Insan Bumi Mandiri",
        ])
      ),
    }),
});

const content = defineCollection({
  loader: file("./src/data/social-media-content/index.json"),
  schema: z.object({
    id: z.string(),
    draft: z.boolean(),
    url: z.string(),
  }),
});

const resume = defineCollection({
  loader: file("./src/data/resume/index.json"),
  schema: z.object({
    id: z.number(),
    profile: z.object({
      name: z.string(),
      location: z.string(),
      contact: z.string().email(),
      summary: z.string(),
    }),
    experience: z.object({
      work: z.array(
        z.object({
          company: z.string(),
          location: z.string(),
          position: z.string(),
          date: z.object({
            start: z.string(),
            end: z.string(),
          }),
          responsibilities: z.array(z.string()),
        })
      ),
      project: z.array(
        z.object({
          name: z.string(),
          location: z.string(),
          role: z.string(),
          date: z.object({
            start: z.string(),
            end: z.string(),
          }),
          responsibilities: z.array(z.string()),
        })
      ),
      organization: z.array(
        z.object({
          name: z.string(),
          location: z.string(),
          role: z.string(),
          date: z.object({
            start: z.string(),
            end: z.string(),
          }),
          responsibilities: z.array(z.string()),
        })
      ),
    }),
    education: z.array(
      z.object({
        institution: z.string(),
        date: z.object({
          start: z.string(),
          end: z.string(),
        }),
        name: z.string(),
      })
    ),
    certification: z.array(
      z.object({
        institution: z.string(),
        date: z.string(),
        name: z.string(),
        detail: z.string(),
        credential: z.string(),
      })
    ),
    skill: z.array(z.string()),
  }),
});

const contact = defineCollection({
  loader: file("./src/data/contact/index.json"),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  article,
  release,
  campaign,
  content,
  resume,
  contact,
};
