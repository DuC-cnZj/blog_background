<template>
    <div>
        <Card title="文章列表">
          <article-index :all="true"></article-index>
        </Card>
    </div>
</template>

<script>
import Index from '_c/article/Index'
export default {
  components: {
    ArticleIndex: Index
  }

}
</script>
