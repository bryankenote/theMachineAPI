// CREATES A NEW A DOCUMENT
exports.create = (state) => {
  state.model.create(state.req.body,
    function (err, doc) {
      if (err) return state.res.status(500).send('There was a problem adding the document.');
      state.res.status(200).send(doc);
    });
};

// RETURNS ALL DOCUMENTS FROM A MODEL
exports.getAll = (state) => {
  state.model.find({}, function (err, doc) {
    if (err) return state.res.status(500).send('There was a problem finding the documents.');
    state.res.status(200).send(doc);
  });
};

// RETURNS A SINGLE DOCUMENT
exports.getOne = (state) => {
  state.model.findById(state.req.params.id, function (err, doc) {
    if (err) return state.res.status(500).send('There was a problem finding the document.');
    if (!doc) return state.res.status(404).send('Document not found.');
    state.res.status(200).send(doc);
  });
};

// DELETES A DOCUMENT
exports.delete = (state) => {
  state.model.findByIdAndRemove(state.req.params.id, function (err, doc) {
    if (err) return state.res.status(500).send('There was a problem deleting the document.');
    state.res.status(200).send(doc);
  });
};

// UPDATES A SINGLE DOCUMENT
exports.put = (state) => {
  state.model.findByIdAndUpdate(state.req.params.id, state.req.body, { new: true }, function (err, doc) {
    if (err) return state.res.status(500).send('There was a problem updating the document.');
    state.res.status(200).send(doc);
  });
};
