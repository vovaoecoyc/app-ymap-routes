import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'AAA',
        },
        { name: 'DDD' },
        { name: 'FFF' },
      ],
    };
  }

  onDragEnd = result => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const items = this.reorder(this.state.items, result.source.index, result.destination.index);

    this.setState(prevState => ({ ...prevState, items: items }));
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  setStyleDrop = () => ({
    width: 400,
    height: 400,
    border: '1px solid red',
  });

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div style={this.setStyleDrop()} ref={provided.innerRef} {...provided.droppableProps}>
              {this.state.items.map((value, i) => (
                <Draggable key={i * Math.random() * 100} draggableId={i + 1} index={i + 1}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={{ width: 200, backgroundColor: 'gray', margin: 5 }}
                    >
                      {value.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Test;
