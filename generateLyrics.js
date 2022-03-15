console.log("Feature Will Be Completed Soon");

const rawLyric = document.getElementById('rawLyric');
const generatePost = document.getElementById('generatePost');
const select = document.getElementById('langSelect');

// Add Event Listener on Button
generatePost.addEventListener('click', generateBlogPost);

// Generate Post
function generateBlogPost(e) {
    // Split Raw Lyrics into Array
    const splitLyrics = rawLyric.value.split('\n');
    
    // Set selected Option
    var lyricLanguage = select.options[select.selectedIndex].value;
    var blogPost = `<div id='lyric-container-${lyricLanguage}'>`;

    // Generate BlogPost
    const generatedPostHTML = splitLyrics.forEach(lyrics => {
        blogPost += lyrics === '' ? '<div> <br/> </div>' : '<div>'+(lyrics)+'</div>'
    });
    blogPost += `</div>`;
    
    // console.log(blogPost);
    rawLyric.value = blogPost;
}