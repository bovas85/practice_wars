class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args);
  }
}
findSmallestInt([78,56,232,12,8]);