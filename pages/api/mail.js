// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const body = JSON.parse(req.body);
  res.status(200).json({ status: 'Ok' })
}
