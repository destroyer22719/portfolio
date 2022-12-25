// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Project = {
  name: string;
  desc: string;
  url?: string;
  github?: string;
  image?: string;
  tags: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const dataDir = path.join(process.cwd(), "data");
  let data: Project[] = JSON.parse(
    fs.readFileSync(path.join(dataDir, "projects.json"), "utf8")
  );
  let result: Project[] = [];
  if (!req.query) {
    result = data;
  } else if (req.query.tag) {
    result = result.concat(
      data.filter((proj) => proj.tags.includes(req.query.tag as string))
    );
  } else if (req.query.search) {
    result = result.concat(
      data.filter((proj) =>
        proj.name
          .toLowerCase()
          .includes((req.query.search as string).toLowerCase())
      )
    );

    result = result.concat(
      data.filter((proj) =>
        proj.desc
          .toLowerCase()
          .includes((req.query.search as string).toLowerCase())
      )
    );
  }

  res.status(200).json(result);
}
