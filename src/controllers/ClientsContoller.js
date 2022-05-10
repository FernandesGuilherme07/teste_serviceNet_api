import User from '../models/User';
import Client from '../models/Clients';

class ClientsCotroller {
  async index(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const Clients = await Client.find({
        userId: user_id,
      });

      return res.status(200).json(Clients);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async show(req, res) {
    try {
      const { user_id, id } = req.params;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const client = await Client.findOne({
        userId: user_id,
        _id: id,
      });

      if (!client) {
        return res.status(404).json();
      }

      return res.status(200).json(client);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const {
        name,
        email,
        brith,
        password,
      } = req.body;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const client = await Client.findOne({
        userId: user_id,
        name,
        email,
        brith,
        password,
      });

      if (client) {
        return res.status(422).json({
          message: `Client ${name} already exists.`,
        });
      }

      const newClient = await Client.create({
        name,
        email,
        brith,
        password,
        userId: user_id,
      });

      return res.status(201).json(newClient);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async update(req, res) {
    try {
      const { user_id } = req.params;
      const {
        id, name, email, password, brith,
      } = req.body;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }
      if (email) {
        return res.status(404).json();
      }

      const client = await Client.findOne({
        userId: user_id,
        id,
      });

      if (!client) {
        return res.status(404).json();
      }

      await client.updateOne({
        name, email, password, brith,
      });
      return res.status(200).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;

      const user = await User.find({ user_id });

      if (!user) {
        return res.status(404).json();
      }

      const client = await Client.findOne({
        userId: user_id,
        _id: id,
      });

      if (!client) {
        return res.status(404).json();
      }

      await client.deleteOne();

      return res.status(200).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export default new ClientsCotroller();
