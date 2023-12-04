import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import {styled} from "@mui/material/styles"
import { useState } from "react";
import { ClickAwayListener } from '@mui/material';
import { useRef } from "react";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import {v4 as uuid} from "uuid"
import React from "react";





const Contianer=styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color:#e0e0e0;
    margin: auto;
    min-height: 30px;
`


const note={
    id:'',
    heading:'',
    text:''
}

const Form=()=>{
    
    const[showTextFeild,setShowTextFeild]=useState(false);
    const[addNote,setAddNote]=useState({...note,id:uuid()});

    const {notes,setNotes}=useContext(DataContext);

    const contianerRef=useRef();

    const onTextAreaClick=()=>{
        setShowTextFeild(true);
        contianerRef.current.style.minHeight='70px';
    }
    const handleClickAway=()=>{
        setShowTextFeild(false);
        contianerRef.current.style.minHeight='30px';
        setAddNote({...note,id:uuid()})

        if(addNote.heading || addNote.text)
        setNotes(prevArr=>[addNote,...prevArr]);
    }

    const onTextChange=(e)=>{
        let changedNote={...addNote,[e.target.name]:e.target.value};
        setAddNote(changedNote);

    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <Contianer ref={contianerRef}>
            {showTextFeild &&
            <TextField
                placeholder="Title"
                variant='standard'
                InputProps={{disableUnderline: true}}
                style={{marginBottom: 10}}
                onChange={(e)=> onTextChange(e)}
                name='heading'
                value={addNote.heading}
            />
}
            <TextField
                placeholder='Take a note...'
                multiline
                variant='standard'
                InputProps={{disableUnderline: true}}
                onClick={onTextAreaClick}
                onChange={(e)=>onTextChange(e)}
                name='text'
                value={addNote.text}
            />
        </Contianer>
        </ClickAwayListener>
    );

}

export default Form;