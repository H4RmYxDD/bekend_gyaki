import db from "./data.js";

db.prepare(
  "CREATE TABLE IF NOT EXISTS champions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, lane TEXT, difficulty INTEGER, blue_essence INTEGER, damage_type TEXT, description TEXT)",
).run();

export const getAllChamps = () => {
  db.prepare("SELECT * FROM champions").all();
};

export const getChampById = (id) => {
  db.prepare("SELECT * FROM champions WHERE id=?").get(id);
};

export const saveChamp = (
  name,
  role,
  lane,
  difficulty,
  blue_essence,
  damage_type,
  description,
) => {
  db.prepare(
    "INSERT INTO champions (name, role, lane, difficulty, blue_essence, damage_type, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
  ).run(name, role, lane, difficulty, blue_essence, damage_type, description);
};

export const updateChamp = (
  id,
  name,
  role,
  lane,
  difficulty,
  blue_essence,
  damage_type,
  description,
) => {
  db.prepare(
    "UPDATE champions SET name=?, role=?, lane=?, difficulty=?, blue_essence=?, damage_type=?, description=? WHERE id=?",
  ).run(
    name,
    role,
    lane,
    difficulty,
    blue_essence,
    damage_type,
    description,
    id,
  );
};

export const deleteChamp = (id) => {
  db.prepare("DELETE FROM champions WHERE id=?").run(id);
};
