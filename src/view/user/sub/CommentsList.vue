<template>
  <div>
    <Row
      :gutter="20"
      style="padding-left:5px;padding-right:5px"
    >
      <Col style="margin-bottom: 20px;">
      <Table
        v-if="comments!==null"
        :columns="columns"
        :data="comments.data"
      ></Table>

      </Col>
      <Col>
      <Page
        v-if="comments!==null"
        :total="comments.meta.total"
        @on-change="pageOnChange"
        @on-page-size-change="onPageSizeChange"
        show-sizer
      />
      </Col>
      <Modal
        :mask-closable="false"
        v-if="previewArticle !== null"
        width="80"
        v-model="modalVisible"
        v-highlight
      >
        <div>
          <div
            slot="header"
            style="display: flex;align-items: center;"
          >
            <img
              style="width:30px;height:30px;border-radius:50%;margin-right: 20px;"
              :src="previewArticle.article.author.avatar"
              alt="author image"
            >
            <span
              v-text="previewArticle.article.author.name"
              style="font-size: 14px;"
            ></span>
          </div>
          <Divider dashed />
          <Row>
            <Col :span="12"  style="padding-right: 20px">
            用户 <em><strong>{{previewArticle.author.name}}</strong></em> 评论到:<p v-html="previewArticle.body"></p>
            </Col>
            <Col :span="12">
            <div>
              <h3>你的回复</h3>
              <ol style="margin-left:10px;line-height:20px">
                <li
                  v-for="r in replies"
                  v-html="r.content"
                  :key="r.id"
                ></li>
              </ol>
            </div>
            <Form :model="formItem">
              <FormItem>
                <Input
                  v-model="formItem.body"
                  type="textarea"
                  :autosize="{minRows: 2,maxRows: 5}"
                  placeholder="Enter something..."
                ></Input>
              </FormItem>
              <FormItem>
                <Button @click="cancel">关闭</Button>
                <Button
                  style="margin-left: 8px"
                  type="primary"
                  @click="handleSubmit"
                >回复</Button>
              </FormItem>
            </Form>
            </Col>
          </Row>
          <Divider dashed />
          <h1 style="text-align:center;margin-bottom: 20px;">{{previewArticle.article.title}}</h1>
          <Divider dashed />
        </div>
        <p
          class="preview"
          v-html="previewArticle.article.content"
        ></p>
      </Modal>
    </Row>
  </div>
</template>

<script>
export default {
  props: ['comments', 'previewArticle', 'replies'],
  data () {
    return {
      formItem: {
        body: ''
      },
      modalVisible: false,
      columns: [
        {
          title: '文章',
          key: 'article',
          render: (h, p) => {
            return h('span', {}, p.row.article.title)
          }
        },
        {
          title: '评论用户',
          key: 'user',
          width: 150,
          render: (h, params) => {
            return h('div', {
              domProps: {
                innerHTML: params.row.author.name
              }
            })
          }
        },
        {
          title: '评论内容',
          key: 'preview',
          align: 'center',
          render: (h, params) => {
            return h('Button', {
              props: {
                type: 'dashed'
              },
              attrs: {
                shape: 'circle',
                icon: 'ios-eye-outline'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.preview(params.row.id)
                }
              }
            })
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.delete(params.row.id, params.row.body)
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ]
    }
  },

  methods: {
    delete (id, content) {
      this.$emit('delete-comment', { id, content })
    },

    cancel () {
      this.modalVisible = false
      this.formItem.body = ''
      this.$emit('click-cancel')
    },

    handleSubmit () {
      this.$emit('submit-comment', {
        body: this.formItem.body,
        article_id: this.previewArticle.article.id,
        comment_id: this.previewArticle.id
      })
      this.formItem.body = ''
    },

    preview (id) {
      this.$emit('preview', id)
      this.modalVisible = true
    },

    pageOnChange (page) {
      this.$emit('page-change', page)
    },
    onPageSizeChange (pageSize) {
      this.$emit('page-size-change', pageSize)
    }
  }
}
</script>
