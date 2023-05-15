import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props) {

    console.log(props.clickedMeme);


    const updateMeme = async (e) =>{
        e.preventDefault();
        const obj = {
            meme_name : e.target.name.value,
            rank: e.target.rank.value,
            top_text : e.target.top_text.value,
            tags: e.target.tags.value,
            image_path : e.target.image.value,
            bottomtext :  e.target.bottomtext.value
        }
        console.log(obj);
        const serverURl = `http://localhost:3003/updatefavMeme/${props.clickedMeme.id}`
        const result = await axios.put(serverURl,obj)

        //close the update modal
        props.closeUpdateModal();

        props.takeNewArrFromChild(result.data)
    }

    return (
        <>
            <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={updateMeme}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" defaultValue={props.clickedMeme.meme_name} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Image Path</Form.Label>
                            <Form.Control name="image" type="text" defaultValue={props.clickedMeme.image_path} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Top Text</Form.Label>
                            <Form.Control name="top_text" type="text" defaultValue={props.clickedMeme.top_text} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rank</Form.Label>
                            <Form.Control name="rank" type="text" defaultValue={props.clickedMeme.rank} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>tags</Form.Label>
                            <Form.Control name="tags" type="text" defaultValue={props.clickedMeme.tags} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Bottom Text</Form.Label>
                            <Form.Control name="bottomtext" type="text" defaultValue={props.clickedMeme.bottomtext} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeUpdateModal}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;