import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import './Pokeinfo.css';
const PokeInfo = ({ name, sprite, types, stats, close, open }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <span className="name">{name}</span>
        <div className="pokemon-sprite">
          <img src={sprite} alt={name} width={150} />
        </div>
        <div className="pokemon-info">
          <div className="pokemon-main-info">
            <div className="typesList">
              {types.map(({ type }, index) => (
                <span className={'typeItem' + ' ' + type.name} key={index}>
                  {type.name}
                </span>
              ))}
            </div>

            <div className="stats">
              {stats.map(({ base_stat, stat }, index) => (
                <span className={stat.name + ' stat-box'} key={index}>
                  {stat.name} : {base_stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PokeInfo;
