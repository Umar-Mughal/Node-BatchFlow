// Next.js API route support: https://nextjs.org/docs/apçççi-routes/introduction

import runBatchProcess from "./batch/executeBatch";

export default async function handler(req, res) {
  const batchOutputBuffer = await runBatchProcess()
  const batchOutput = Buffer.from(batchOutputBuffer).toString()
  res.status(200).json({ name: 'Umar', hello: 'hello', batchOutput })
}
