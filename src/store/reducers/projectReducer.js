const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah', link: 'www.google.com'},
        {id: '2', title: 'collect all the eggs', content: 'blah blah blah', link: 'www.google.com'},
        {id: '3', title: 'Mario beats Luigi', content: 'blah blah blah', link: 'www.google.com'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state; 
        default:
            return state;
    }
}

export default projectReducer