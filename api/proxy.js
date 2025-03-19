import fetch from "node-fetch";
export default async function handler(req, res) {
  const response = await fetch('http://skypractice.xyz:25622/' + req.query.endpoint);
  const data = await response.json();
  res.status(200).json(data);
}
