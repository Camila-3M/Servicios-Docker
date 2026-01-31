CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO items (name)
VALUES
('Item A'),
('Item B'),
('Item C');