export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Comment: {
        Row: {
          comment_id: string | null
          content_type: Database["public"]["Enums"]["ContentType"]
          created_at: string
          id: string
          post_id: string | null
          reel_id: string | null
          text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment_id?: string | null
          content_type: Database["public"]["Enums"]["ContentType"]
          created_at?: string
          id: string
          post_id?: string | null
          reel_id?: string | null
          text: string
          updated_at: string
          user_id: string
        }
        Update: {
          comment_id?: string | null
          content_type?: Database["public"]["Enums"]["ContentType"]
          created_at?: string
          id?: string
          post_id?: string | null
          reel_id?: string | null
          text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      Content: {
        Row: {
          content_type: Database["public"]["Enums"]["MessageContentType"]
          src: string
        }
        Insert: {
          content_type: Database["public"]["Enums"]["MessageContentType"]
          src: string
        }
        Update: {
          content_type?: Database["public"]["Enums"]["MessageContentType"]
          src?: string
        }
        Relationships: []
      }
      Conversation: {
        Row: {
          conversation_owner_id: string | null
          created_at: string
          id: string
          is_group_conversation: boolean
          updated_at: string
        }
        Insert: {
          conversation_owner_id?: string | null
          created_at?: string
          id: string
          is_group_conversation?: boolean
          updated_at: string
        }
        Update: {
          conversation_owner_id?: string | null
          created_at?: string
          id?: string
          is_group_conversation?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      ConversationMember: {
        Row: {
          conversation_id: string
          member_id: string
        }
        Insert: {
          conversation_id: string
          member_id: string
        }
        Update: {
          conversation_id?: string
          member_id?: string
        }
        Relationships: []
      }
      Location: {
        Row: {
          business_name: string | null
          city: string | null
          country: string
          created_at: string
          id: string
          state: string | null
          street: string | null
          updated_at: string
          zip_code: number | null
        }
        Insert: {
          business_name?: string | null
          city?: string | null
          country: string
          created_at?: string
          id: string
          state?: string | null
          street?: string | null
          updated_at: string
          zip_code?: number | null
        }
        Update: {
          business_name?: string | null
          city?: string | null
          country?: string
          created_at?: string
          id?: string
          state?: string | null
          street?: string | null
          updated_at?: string
          zip_code?: number | null
        }
        Relationships: []
      }
      Media: {
        Row: {
          alt_text: string | null
          created_at: string
          id: string
          position: number | null
          post_id: string
          src: string
          type: Database["public"]["Enums"]["MediaType"]
          updated_at: string
          user_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          id: string
          position?: number | null
          post_id: string
          src: string
          type: Database["public"]["Enums"]["MediaType"]
          updated_at: string
          user_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          id?: string
          position?: number | null
          post_id?: string
          src?: string
          type?: Database["public"]["Enums"]["MediaType"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      Message: {
        Row: {
          conversation_id: string
          created_at: string
          id: string
          is_deleted: boolean
          message_content_id: string | null
          text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          id: string
          is_deleted?: boolean
          message_content_id?: string | null
          text: string
          updated_at: string
          user_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          message_content_id?: string | null
          text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      MessageContent: {
        Row: {
          content_id: string
          message_id: string
        }
        Insert: {
          content_id: string
          message_id: string
        }
        Update: {
          content_id?: string
          message_id?: string
        }
        Relationships: []
      }
      Post: {
        Row: {
          created_at: string
          creator_id: string
          description: string | null
          disable_comments: boolean
          hide_stats: boolean
          id: string
          location_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          description?: string | null
          disable_comments?: boolean
          hide_stats?: boolean
          id: string
          location_id?: string | null
          updated_at: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          description?: string | null
          disable_comments?: boolean
          hide_stats?: boolean
          id?: string
          location_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      PostInteraction: {
        Row: {
          created_at: string
          is_bookmarked: boolean
          is_liked: boolean
          is_shared: boolean
          post_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          is_bookmarked?: boolean
          is_liked?: boolean
          is_shared?: boolean
          post_id: string
          updated_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          is_bookmarked?: boolean
          is_liked?: boolean
          is_shared?: boolean
          post_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      PostTag: {
        Row: {
          created_at: string
          post_id: string
          tagged_person_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          post_id: string
          tagged_person_id: string
          updated_at: string
        }
        Update: {
          created_at?: string
          post_id?: string
          tagged_person_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      Reel: {
        Row: {
          created_at: string
          creator_id: string
          description: string | null
          id: string
          is_displayed_in_feed: boolean
          is_displayed_in_grid: boolean
          sound_id: string | null
          src: string
          thumbnail_src: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          description?: string | null
          id: string
          is_displayed_in_feed?: boolean
          is_displayed_in_grid?: boolean
          sound_id?: string | null
          src: string
          thumbnail_src: string
          updated_at: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          description?: string | null
          id?: string
          is_displayed_in_feed?: boolean
          is_displayed_in_grid?: boolean
          sound_id?: string | null
          src?: string
          thumbnail_src?: string
          updated_at?: string
        }
        Relationships: []
      }
      ReelInteraction: {
        Row: {
          created_at: string
          is_bookmarked: boolean
          is_liked: boolean
          is_shared: boolean
          reel_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          is_bookmarked?: boolean
          is_liked?: boolean
          is_shared?: boolean
          reel_id: string
          updated_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          is_bookmarked?: boolean
          is_liked?: boolean
          is_shared?: boolean
          reel_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      Relationship: {
        Row: {
          agent_id: string
          created_at: string
          has_muted_messages: boolean
          has_muted_posts: boolean
          has_muted_stories: boolean
          is_close_friends: boolean
          relationship: Database["public"]["Enums"]["RelationshipType"]
          target_id: string
          updated_at: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          has_muted_messages?: boolean
          has_muted_posts?: boolean
          has_muted_stories?: boolean
          is_close_friends?: boolean
          relationship: Database["public"]["Enums"]["RelationshipType"]
          target_id: string
          updated_at: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          has_muted_messages?: boolean
          has_muted_posts?: boolean
          has_muted_stories?: boolean
          is_close_friends?: boolean
          relationship?: Database["public"]["Enums"]["RelationshipType"]
          target_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      Sound: {
        Row: {
          creator_id: string
          id: string
          src: string
          thumbnail_src: string
        }
        Insert: {
          creator_id: string
          id: string
          src: string
          thumbnail_src: string
        }
        Update: {
          creator_id?: string
          id?: string
          src?: string
          thumbnail_src?: string
        }
        Relationships: []
      }
      Story: {
        Row: {
          created_at: string
          creator_id: string
          id: string
          is_for_close_friends: boolean
          media_type: Database["public"]["Enums"]["MediaType"]
          src: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          id: string
          is_for_close_friends?: boolean
          media_type: Database["public"]["Enums"]["MediaType"]
          src: string
          updated_at: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          id?: string
          is_for_close_friends?: boolean
          media_type?: Database["public"]["Enums"]["MediaType"]
          src?: string
          updated_at?: string
        }
        Relationships: []
      }
      StoryInteraction: {
        Row: {
          created_at: string
          is_hidden: boolean
          is_liked: boolean
          is_shared: boolean
          story_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          is_hidden?: boolean
          is_liked?: boolean
          is_shared?: boolean
          story_id: string
          updated_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          is_hidden?: boolean
          is_liked?: boolean
          is_shared?: boolean
          story_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          bio: string | null
          created_at: string
          gender: string | null
          hide_like_count: boolean
          id: string
          is_private_account: boolean
          profile_name: string
          profile_picture_url: string | null
          updated_at: string
          username: string
          who_can_comment: Database["public"]["Enums"]["PeopleType"]
          who_can_tag: Database["public"]["Enums"]["PeopleType"]
        }
        Insert: {
          bio?: string | null
          created_at?: string
          gender?: string | null
          hide_like_count?: boolean
          id: string
          is_private_account?: boolean
          profile_name: string
          profile_picture_url?: string | null
          updated_at: string
          username: string
          who_can_comment?: Database["public"]["Enums"]["PeopleType"]
          who_can_tag?: Database["public"]["Enums"]["PeopleType"]
        }
        Update: {
          bio?: string | null
          created_at?: string
          gender?: string | null
          hide_like_count?: boolean
          id?: string
          is_private_account?: boolean
          profile_name?: string
          profile_picture_url?: string | null
          updated_at?: string
          username?: string
          who_can_comment?: Database["public"]["Enums"]["PeopleType"]
          who_can_tag?: Database["public"]["Enums"]["PeopleType"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      hello: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      ContentType: "POST" | "REEL"
      MediaType: "IMAGE" | "VIDEO"
      MessageContentType:
        | "POST"
        | "STORY"
        | "REEL"
        | "UPLOADED_IMAGE"
        | "UPLOADED_VIDEO"
        | "PROFILE"
      PeopleType: "EVERYONE" | "PEOPLE_YOU_FOLLOW" | "NO_ONE"
      RelationshipType: "FOLLOWS" | "BLOCKS"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
