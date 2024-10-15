const updateDocument = async (Model, id, updatedData, res) => {
    try {
        const updatedDocument = await Model.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        if (!updatedDocument) {
            return res.status(404).send(`${Model.modelName} no encontrado`);
        }

        return res.json(updatedDocument);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = updateDocument;
