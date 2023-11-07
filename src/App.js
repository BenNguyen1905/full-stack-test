import './App.css';
import Modal from './components/Modal';
import React, { useState } from 'react';

function App() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='SimpleExample'>
          <button onClick={() => setModal1Open(!modal1Open)}>
            Simple Example
          </button>
          <Modal
            style={{ width: '60%' }}
            isOpen={modal1Open}
            onClose={() => setModal1Open(false)}
            onOk={() => setModal1Open(false)}
            header={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Header
              </div>
            }
          >
            <div>Children</div>
          </Modal>
        </div>
        <div className='AsyncLogic'>
          <button onClick={() => setModal2Open(!modal2Open)}>
            Open Modal with async logic
          </button>
          <Modal
            style={{ width: '60%' }}
            isOpen={modal2Open}
            onClose={() => setModal2Open(false)}
            onOk={() => {
              setTimeout(() => {
                setModal2Open(false);
              }, 2000);
            }}
            header={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Header
              </div>
            }
          >
            <div>Children</div>
          </Modal>
        </div>
        <div className='Customize built-in style'>
          <button onClick={() => setModal3Open(!modal2Open)}>
            Customize header style
          </button>
          <Modal
            style={{ width: '60%' }}
            isOpen={modal3Open}
            onClose={() => setModal3Open(false)}
            onOk={() => setModal3Open(false)}
            header={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'cyan',
                  borderBottom: '4px dotted blue',
                }}
              >
                Header
              </div>
            }
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'red ',
              }}
            >
              <p>Some Content ...</p>
              <p>Some Content ...</p>
              <p>Some Content ...</p>
            </div>
          </Modal>
        </div>
      </header>
    </div>
  );
}

export default App;
