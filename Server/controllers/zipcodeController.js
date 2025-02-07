import Zipcode from "../models/Zipcode.js";

const getZipCodes = async (req, res) => {
  const { zipCode } = req.query;
  try {
    const results = await Zipcode.find({
      postalCode: { $regex: `^${zipCode}`, $options: "i" },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getZipCodes };
