"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { definePlugin } from "sanity";
import { HomeIcon } from "@sanity/icons";
import CustomPage from "./src/app/components/CostumPage";
import Zoha from "./src/app/components/Zoha";

const customDashboardTool = definePlugin({
  name: "custom-dashboard",
  tools: [
    {
      name: "dashboard",
      title: "Dashboard",
      icon: HomeIcon, // optional
      component: CustomPage,
    },
    {
      name: "zoha",
      title: "Zoha",
      icon: HomeIcon, // optional
      component: Zoha,
    }
  ],
});

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    customDashboardTool(),
  ],
});
