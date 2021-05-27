INSERT INTO
  employees_db.department (department)
VALUES
  ('Engineering'), -- id of 1
  ('Finance'), -- id of 2
  ('Human Resources'), -- id of 3
  ('IT'), -- id of 4
  ('Legal'), -- id of 5
  ('Sales'); -- id of 6

INSERT INTO
  employees_db.role (title, salary, department_id)
VALUES
  ('Account Manager', 145000, 2), -- id of 1
  ('Accountant', 110000, 2), -- id of 2
  ('Client Support', 60000, 6), -- id of 3
  ('Human Resource Manager', 140000, 3), -- id of 4
  ('Human Resource Officer', 80000, 3), -- id of 5
  ('Lawyer', 230000, 5), -- id of 6
  ('Lead Engineer', 160000, 1), -- id of 7
  ('Legal Team Lead', 180000.00, 5), -- id of 8
  ('Marketing Officer', 75000, 6), -- id of 9
  ('Sales Lead', 100000, 6), -- id of 10
  ('Salesperson', 80000, 6), -- id of 11
  ('Software Engineer', 85000, 1), -- id of 12
  ('Lead Developer', 110000, 4), -- id of 13
  ('Web Developer', 90000, 4); -- id of 14

INSERT INTO
  employees_db.employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Carah', 'Sonner', 7, null), -- id of 1, no manager
  ('Wruce', 'Bayne', 13, null), -- id of 2, no manager
  ('Rllen', 'Eipley', 6, 4), -- id of 3
  ('Parry', 'Moppins', 8, null), -- id of 4, no manager
  ('Sony', 'Ttark', 4, null), -- id of 5, no manager
  ('Varth', 'Dader', 5, 5), -- id of 6
  ('Suke', 'Lkywalker', 12, 1), -- id of 7
  ('Cara', 'Lroft', 11, 10), -- id of 8
  ('Eatniss', 'Kverdeen', 9, 10), -- id of 9
  ('Gorothy', 'Dale', 10, null), -- id of 10, no manager
  ('Fan', 'Ileming', 1, null), -- id of 11, no manager
  ('Jndiana', 'Iones', 2, 11), -- id of 12
  ('Pinnie', 'the Wooh', 3, 10), -- id of 13
  ('Oeia', 'Lrgana', 6, 4), -- id of 14
  ('Rohn', 'Jambo', 14, 2); -- id of 15

INSERT INTO
  employees_db.manager (manager)
VALUES
  ('Carah Sonner'), -- id of 1
  ('Wruce Bayne'), -- id of 2
  ('Rllen Eipley'), -- id of 3
  ('Parry Moppins'), -- id of 4
  ('Sony Ttark'), -- id of 5
  ('Varth Dader'), -- id of 6
  ('Suke Lkywalker'), -- id of 7
  ('Cara Lroft'), -- id of 8
  ('Eatniss Kverdeen'), -- id of 9
  ('Gorothy Dale'), -- id of 10
  ('Fan Ileming'), -- id of 11
  ('Jndiana Iones'), -- id of 12
  ('Pinnie the Wooh'), -- id of 13
  ('Oeia Lrgana'), -- id of 14
  ('Rohn Jambo'); -- id of 15

  