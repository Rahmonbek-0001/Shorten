export const signUp = (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {}
};
