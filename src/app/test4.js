const pipeline = (...fns) => {
    return fns.reduce((result, f) => {
        return (...args) => {
            return f(result(...args));
        }
    });
}

const allTasks = { 
    date: "2017-09-22", 
    byPerson: [
        { 
            responsible: "EG", 
            tasks: [
                { id: 111, desc: "task 111", done: false }, 
                { id: 222, desc: "task 222", done: false }
            ] 
        }, 
        { 
            responsible: "FK", 
            tasks: [
                { id: 555, desc: "task 555", done: false }, 
                { id: 777, desc: "task 777", done: true }, 
                { id: 999, desc: "task 999", done: false }
            ] 
        }, 
        { 
            responsible: "ST", 
            tasks: [
                { id: 444, desc: "task 444", done: true }
            ] 
        }
    ] 
};

const getField = attr => obj => obj[attr];
const filter = fn => arr => arr.filter(fn);
const map = fn => arr => arr.map(fn);
const reduce = (fn, init) => arr => arr.reduce(fn, init);

const pending = (name) =>    pipeline(        getField("byPerson"),        filter(t => t.responsible === name),        map(t => t.tasks),        reduce((y, x) => x, []),        filter(t => t && !t.done),        map(getField("id"))    )(allTasks || {byPerson: []});

console.log(pending("FK"));