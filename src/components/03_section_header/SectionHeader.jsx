import './sectionHeader.css';

function SectionHeader(props){

    const {sectionNumber, sectionName} = props;

    return (
        <div className="section__header">
            <h5>{sectionNumber}.</h5>
            <h1>{sectionName}</h1>
        </div>
    )
}

export default SectionHeader;