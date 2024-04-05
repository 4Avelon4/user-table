<template>
  <div class="pagination__wrapper">
    <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <a class="pagination__link" href="#" aria-label="Предыдущая страница"
          :class="{ 'pagination__link--disabled': page === 1 }" @click.prevent="pagePrev(page)">
          Назад
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber" :class="{
        'pagination__item--hidden': pageHideClass(pageNumber),
        'pagination__item--prev': pagePrevClass(pageNumber),
        'pagination__item--next': pageNextClass(pageNumber),
      }">
        <a class="pagination__link" href="#" :class="{
          'pagination__link--current': pageNumber === page,
        }" @click.prevent="paginate(pageNumber)">
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#" aria-label="Следующая страница"
          :class="{ 'pagination__link--disabled': page === pages }" @click.prevent="pageNext(page)">
          Вперёд
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    pagePrevClass(pageNumber) {
      const value = pageNumber === this.page - 1 && pageNumber > 2 && this.pages > 5;

      return value;
    },
    pageNextClass(pageNumber) {
      const value = pageNumber === this.page + 1
        && pageNumber < this.pages - 1 && this.pages > 5;

      return value;
    },
    pageHideClass(pageNumber) {
      const value = (pageNumber > this.page + 1 || pageNumber < this.page - 1)
        && pageNumber > 1 && pageNumber < this.pages && this.pages > 5;

      return value;
    },
    paginate(page) {
      this.$emit('update:page', page);
    },
    pagePrev() {
      if (this.page !== 1) {
        this.$emit('update:page', this.page - 1);
      }
    },
    pageNext() {
      if (this.page !== this.pages) {
        this.$emit('update:page', this.page + 1);
      }
    },
  },
};
</script>

<style lang="scss">
  .pagination__wrapper {
    margin: 0;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
  }

  .pagination {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 400px;

    &__item {
      &:not(:last-child) {
        margin-right: 10px;
      }

      &--prev {
        position: relative;
        padding-left: 20px;

        ::before {
          position: absolute;
          content: '...';
          right: 16px;
          font-size: 20px;
          font-weight: 600;
          bottom: -1px;
        }
      }

      &--next {
        position: relative;
        padding-right: 20px;

        ::after {
          position: absolute;
          content: '...';
          left: 16px;
          font-size: 20px;
          font-weight: 600;
          bottom: -1px;
        }
      }

      &--hidden {
        display: none;
      }
    }

    &__link {
      text-decoration: none;
    }

    &__link--current {
      font-weight: 600;
      color: blue;
    }
  }
</style>
