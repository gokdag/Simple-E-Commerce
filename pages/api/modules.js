const firmPacketJson = require("../../public/helper/firmPacket.json");

export default function handler(req, res) {
  return res.status(200).send({ moduleData: firmPacketJson.homePage_modules });
}
