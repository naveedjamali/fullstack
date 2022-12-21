// function greatings(message){
//     alert(`${message} everyone!`)
// }

// let greatings = (message)=>alert(`${message} everyone!`);

// greatings('Good morning'); 

let createBlog = (title,body)=>{


    if(!title){
        throw new Error('A title is required')
    }

    if(!body){
        throw new Error('A body is required')


    }

    return alert(`${title} - ${body}`);
}

createBlog('Confirm','Confirm that you are an alien'); 