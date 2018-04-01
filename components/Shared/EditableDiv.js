export default ({field, data, onChange, onUpdate}) => {
    const id = data.objectId

    const _onChange = (e) => {
        const payload = {[field]: e.target.textContent}
        return onChange? onChange(id, payload) : null
    }
    const handleKeyPress = (e) => {
        var keyCode = e.which || e.keyCode

        if(keyCode === 13) {
            const payload = {[field]: e.target.textContent}
            e.preventDefault()
            return onUpdate? onUpdate(id, payload) : null
        }
    }

    return (<div 
        className='single-line'
        contentEditable='true'
        onChange={_onChange}
        onKeyPress={handleKeyPress}
        onInput={_onChange} >
        {data[field]}

          <style jsx>{`
            .single-line {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display: inline-block;
                vertical-align: top;
                border: 1px solid #f3f3f3;
            }
            
            [contenteditable="true"].single-line {
                white-space: nowrap;
                width:200px;
                overflow-y: hidden;
                padding: 5px 10px;
            } 
            [contenteditable="true"].single-line br {
                display:none;
            }
            [contenteditable="true"].single-line * {
                display:inline;
                white-space:nowrap;
            }
            
            .single-line:focus {
                text-overflow: inherit;
            }
          `}</style>


    </div>)
}