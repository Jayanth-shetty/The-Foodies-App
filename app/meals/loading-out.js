import classes from "./loading.module.css";

export default function MealsLoading() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div className={classes.foodIcons}>🍕 🍔 🍟 🍩 🍜</div>
        <h2 className={classes.title}>Cooking your meals...</h2>
        <p className={classes.subtitle}>
          Please wait while we prepare something delicious 😋
        </p>
      </div>
    </div>
  );
}
