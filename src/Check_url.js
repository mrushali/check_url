import React from 'react'
import axios from 'axios';

const Check_url = () => {
    const valid_link = () => {
        const posts = 'https://jsonplaceholder.typicode.com/posts';
        const post_id = 'https://jsonplaceholder.typicode.com/posts/59';
        const users = 'https://jsonplaceholder.typicode.com/users';
        const comments = 'https://jsonplaceholder.typicode.com/comments';
        const albums = 'https://jsonplaceholder.typicode.com/albums';
        const photos = 'https://jsonplaceholder.typicode.com/photos';
        const todos = 'https://jsonplaceholder.typicode.com/todos';


        axios
            .get(posts, post_id, users, comments, albums, photos, todos)
            .then((response) => {
                if (response != {}) {
                    console.log("Valid Link \n" + posts + '\n' + post_id + '\n' +
                        users + '\n' + comments + '\n'
                        + albums + '\n' + photos + '\n' + todos + '\n'
                    );
                }
            });
    }
    const invalid_link = () => {
        const post_id1 = 'https://jsonplaceholder.typicode.com/posts/178';
        const user_id = 'https://jsonplaceholder.typicode.com/users/987';
        const todo_id = 'https://jsonplaceholder.typicode.com/todos/967';
        const comment_id = 'https://jsonplaceholder.typicode.com/comments/732';

        axios
            .get(post_id1, user_id, todo_id, comment_id)
            .then((response) => {
                console.log("InValid Link \n" + post_id1 + '\n' + user_id + '\n' +
                    todo_id + '\n' + comment_id + '\n'
                );
            })
            .catch((error) => {
                console.log('Error : ' + error + post_id1 + '\n' + user_id + '\n' +
                    todo_id + '\n' + comment_id + '\n');
            })

    }
    const activeLink = () => {
        valid_link();
    }
    const inActivelink = () => {
        invalid_link();
    }
    return (
        <>
            <div className="card" style={{ 'margin': '50px' }}>
                <div className="card-body">
                    <h5 className="card-title">Check Valid or Invalid URL By clicking on this button.</h5>
                    <div className='row'>
                        <div className='col-6'>
                            <button onClick={() => { activeLink(); }} className="btn btn-primary">Active Links</button>
                        </div>
                        <div className='col-6'>
                            <button onClick={() => { inActivelink(); }} className="btn btn-primary">Inactive Links</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Check_url