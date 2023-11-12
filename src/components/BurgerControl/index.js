import css from './style.module.css';

const BurgerControl = (props) => {
  console.log(props.type);
  return (
    <div className={css.BurgerControl}>
      <div className={css.Label}>{props.ingredientNames[props.type]}</div>
      <button
        className={css.Less}
        onClick={() => props.removeIngredient(props.type)}
      >
        Хасах
      </button>
      <button
        className={css.More}
        onClick={() => props.addIngredient(props.type)}
      >
        Нэмэх
      </button>
    </div>
  );
};

export default BurgerControl;
