import styled from "styled-components";

export const Title = styled.h2`
font-weight: 400;
font-size: 23px;
padding-left: 5px;
padding-top: 10px;
margin: 0;
margin-bottom: 7px;
`
export const Form = styled.form`
display: block;
width:450px;
height:150px;
border: 2px solid black;
`
export const Btn = styled.button`
display: flex;
background-color: white;
cursor:pointer;
border: 1px solid grey;
border-radius: 5px;
margin-left: 5px;
&:hover,
&:focus{
background-color: teal;
color: white;
}
`
export const Input = styled.input`
display: flex;
cursor:pointer;
width: 150px;
height: 15px;
margin-left: 5px;
margin-bottom: 15px;
&:hover,
&:focus
{
border-color: red;
box-shadow: 0 0 10px #913945;
outline: none;
}
`
export const Label = styled.label`
display:block;
`