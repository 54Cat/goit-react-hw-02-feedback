import PropTypes from "prop-types";
import { BtnList, BtnItem, Btn } from 'components/Feedback/FeedbackStyled';


export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <BtnList>
            <BtnItem>
                <Btn type="button" id="good" onClick={onLeaveFeedback}>Good</Btn>
            </BtnItem>
            <BtnItem>
                <Btn type="button" id="neutral" onClick={onLeaveFeedback}>Neutral</Btn>
            </BtnItem>
            <BtnItem>
                <Btn type="button" id="bad" onClick={onLeaveFeedback}>Bad</Btn>
            </BtnItem>
        </BtnList>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}
