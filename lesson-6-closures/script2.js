function interviewQuestion(prof) {
    return function(name) {
        if(prof === 'designer') {
            console.log(name + ' ' + 'can you please explain what UX design is?');
        } else if (prof === 'teacher') {
            console.log('What subject do you teach' + ' ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mark');
interviewQuestion('cleaner')('Steve');