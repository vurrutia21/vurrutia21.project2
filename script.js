window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

document.getElementById('btn').addEventListener('click', () => {
    console.log('the button was clicked')

    fetch('https://api.giphy.com/v1/gifs/search?api_key=3spFFEQw0z1b6BhXKSih8OsyL1gML0RI=')
    .then((res) => {
        return res.json();
    }).then((data) => {
    })
});