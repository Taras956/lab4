import{
    addItemPage,
    clearInputs,
    renderItemsList,
    getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

let books = [];

const addItem = ({title, desc}) => {
    const generetedId = uuid.v1();

    const newItem = {
        id: generetedId,
        title,
        desc,
    };
    books.push(newItem);

    addItemPage(newItem);
};
function addNewItemToLocalStorage(item) {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.push(item);
    localStorage.setItem("items", JSON.stringify(storedItems));
  }

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();

    const {title, description} = getInputValues();

    clearInputs();

    addItem({
        title,
        desc: description,
    });
});

findButton.addEventListener("click", () =>{
    const foundBooks = books.filter(books=>books.title.search(findInput.value) !== -1);

    renderItemsList(foundBooks);
});

cancelFindButton.addEventListener("click", () =>{
    renderItemsList(books);

    findInput.value = "";
})

renderItemsList(books);
addNewItemToLocalStorage({ title, desc });

