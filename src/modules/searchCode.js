import ajaxService from "./ajaxService";

const searchCode = () => {
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const city = document.querySelector('.city').value;
        const result = document.querySelector('.result');
        const alert = document.querySelector('.alert');

        let searchResponse;

        ajaxService(searchTerm, city)
        .then(result => searchResponse = result)
        .then(() => {
            console.log(searchResponse)

            if (searchResponse.data.length == 0)
            {
                alert.classList.remove('d-none');
            } else {
                alert.classList.add('d-none');
                result.value = searchResponse.data[0].post_code;
            }
        })
    })
}

export default searchCode;