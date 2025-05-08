import Dream from '../models/Dream.js';

export const getDreams = async (req, res) => {
  try {
    const dreams = await Dream.find().sort({ createdAt: -1 });
    res.status(200).json(dreams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDream = async (req, res) => {
  try {
    const { person, title, description } = req.body;
    
    const newDream = new Dream({
      person,
      title,
      description
    });

    const savedDream = await newDream.save();
    res.status(201).json(savedDream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};