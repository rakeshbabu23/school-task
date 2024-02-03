const studentList = {
  rakesh: {
    Name: "Rakesh Babu",
    Teachers: ["T1", "T2"],
  },
  tharun: {
    Name: "Tharun",
    Teachers: ["T1"],
  },
};
const teacherList = {
  t1: {
    Name: "T1",
    Students: ["Rakesh Babu", "Tharun"],
  },
  t2: {
    Name: "T2",
    Students: ["Rakesh Babu"],
  },
};
const adminList = {
  admin: {
    teachers: ["T1", "T2"],
    students: ["Rakesh Babu", "Tharun"],
  },
};

export { studentList, teacherList, adminList };
