import React, {useState, useEffect} from "react";
import APIService from "../APIService";
import {useCookies} from 'react-cookie';


function Form(props) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [token, setToken] = useCookies(['mytoken'])


useEffect(() => {
    setTitle(props.article.title)
    setDescription(props.article.description)
}, [props.article])

const updateArticle = () => {
    APIService.updateArticle(props.article.id, {title, description}, token['mytoken'])
    .then(resp => props.updatedInformation(resp))
}

const insertArticle = () => {
    APIService.InsertArticle({title, description}, token['mytoken'])
    .then(resp => props.insertedInformation(resp))
}

return (
    <div>

{props.article ? (
    <div className="mb-3">

        <label htmlFor = "title" className = "form-label">Title</label>
        <input type="text" className = "form-control" id="title" placeholder="Please Enter the Title"></input>
        value = {title} onChange = {e => setTitle(e.target.value)}
      
        <label htmlFor = "description" className = "form-label">Description</label>
        <textarea className = "form-control" id="description" rows="5"></textarea>
        value = {description} onChange = {e => setDescription(e.target.value)}


{
    props.article.id ?   <button onClick = {updateArticle}className="btn btn-success">Update</button>
    :   <button onClick = {insertArticle}className="btn btn-success">Insert Article</button>
}

      
        <br></br>

    </div>

) : null}

    </div>
)


}