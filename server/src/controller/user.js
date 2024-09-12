import * as services from '../services/index';
export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await services.getAllUser(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json("Không có data")
    }

}