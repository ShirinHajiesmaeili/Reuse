import Zipcode from "../models/Zipcode.js";

const getZipCodes = async (req, res) => {
  const { zipcode } = req.query;
  try {
    const results = await Zipcode.find({
      postalCode: { $regex: `^${zipcode}`, $options: "i" },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getZipCodes };
