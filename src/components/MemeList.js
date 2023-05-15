import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MemeModal from './MemeModal'
import { useEffect, useState } from 'react';
import UpdateModal from './UpdateModal';

function MemeList(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [updateFlag,setUpdateFlag] = useState(false);
    const [newArr,setNewArr] =  useState([]);

    const [clickedMeme, setClickedMeme] = useState({});

    const handleShow = (item) => {
        setShowFlag(true);
        setClickedMeme(item)
    }

    const handleClose = () => {
        setShowFlag(false);
    }

    // Update
    const showUpdateModal= (item) =>{
        setUpdateFlag(true);
        setClickedMeme(item);
        console.log(item);
    }

    const closeUpdateModal = () =>{
        setUpdateFlag(false);
    }

    const takeNewArrFromChild = (arr) => {
        setNewArr(arr);
    }

    useEffect(()=>{
        setNewArr(props.favArr)
    },[props.favArr])
    return (
        <>
            {newArr.map((item) => {
                return <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.image_path} />
                    <Card.Body>
                        <Card.Title>{item.meme_name}</Card.Title>
                        <Card.Text>
                            <p>{item.toptext}</p>
                            <p>{item.tags}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => { handleShow(item) }}>See more</Button>
                        <Button variant="success" onClick={()=> {showUpdateModal(item)}}>Update</Button>
                        <Button variant="danger">Delete</Button>

                    </Card.Body>
                </Card>
            })}

            <MemeModal showFlag={showFlag} handleClose={handleClose} clickedMeme={clickedMeme} />
            <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} clickedMeme={clickedMeme} takeNewArrFromChild={takeNewArrFromChild} />
        </>
    )
}

export default MemeList;