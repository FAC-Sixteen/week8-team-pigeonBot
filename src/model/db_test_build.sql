BEGIN;

DROP TABLE IF EXISTS editors CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE editors (
  'id' SERIAL PRIMARY KEY,
  'name' varchar NOT NULL
);

CREATE TABLE users (
  'id' SERIAL PRIMARY KEY,
  'first_name' varchar NOT NULL,
  'last_name' varchar NOT NULL,
  'fac_cohort' varchar NOT NULL,
  'editors_id' INTEGER,
  'image_path' varchar,
  'comment' varchar
);

ALTER TABLE users ADD FOREIGN KEY (editors_id) REFERENCES editors (id);

INSERT INTO editors(name)
VALUES
  ('Visual Studio Code'),
  ('Atom'),
  ('Sublime'),
  ('Wordpad'),
  ('Brackets'),
  ('Notepad++'),
  ('Ulysses');

INSERT INTO users(first_name, last_name, fac_cohort, image_path, editors_id, comment)
VALUES
  ('Henry', 'Stockdale', 16, 'henry.jpeg', 1, 'First choice, last choice'),
  ('Dylan', 'Almano', 16, 'dylan.jpeg', 1, 'I love it!'),
  ('Bobby', 'Sebolao', 16, 'bobby.jpeg', 2, 'Atom is the clear choice for cool people'),
  ('Sylvia', 'Hoang', 16, 'sylvia.jpeg', 1, 'It\'s the only way');

COMMIT;
