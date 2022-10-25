import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    let [postList, setPostList] = useState([]);
        
    /* Use the map() function to render multiple Blocks! */

    const posts = postList.map((post)=> {return (<Block color ={post}></Block>)});
   
    const addPost = (post) => {
        setPostList([post, ...postList]);

    }

    return (
        <div>
            <Menu add = {addPost}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;