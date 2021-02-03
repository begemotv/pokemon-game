const GamePage = ({onPageChange}) => {
    return (
      <div>
          <p>This is gamepage!</p>
          <button 
            onClick={() => onPageChange('app')}
            type='button'
          >Home Page</button>
      </div>
    );
  };
  
  export default GamePage;