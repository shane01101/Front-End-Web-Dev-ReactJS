import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        const options = {year: 'numeric', month: 'short', day: 'numeric'};
        
        if(dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li className="media">
                                <div className="media-body">
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString('en-US', options)}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
            
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-5 mt-1 ml-0">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1 ml-0">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;