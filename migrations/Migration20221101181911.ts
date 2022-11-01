import { Migration } from '@mikro-orm/migrations';

export class Migration20221101181911 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "listing" drop constraint "listing_created_by_address_foreign";');

    this.addSql('alter table "offer" drop constraint "offer_created_by_address_foreign";');

    this.addSql('alter table "shipment" drop constraint "shipment_account_address_foreign";');

    this.addSql('alter table "interested_nft_attributes" drop constraint "interested_nft_attributes_attribute_trait_type_at_114a5_foreign";');

    this.addSql('alter table "kollection_attributes" drop constraint "kollection_attributes_attribute_trait_type_attrib_85a42_foreign";');

    this.addSql('alter table "nft_attributes" drop constraint "nft_attributes_attribute_trait_type_attribute_value_foreign";');

    this.addSql('alter table "deposit_ft" drop constraint "deposit_ft_ft_chain_ft_contract_foreign";');

    this.addSql('alter table "listing_ft" drop constraint "listing_ft_ft_chain_ft_contract_foreign";');

    this.addSql('alter table "listing_interested_fts" drop constraint "listing_interested_fts_ft_chain_ft_contract_foreign";');

    this.addSql('alter table "remaining_ft" drop constraint "remaining_ft_ft_chain_ft_contract_foreign";');

    this.addSql('alter table "swap_ft" drop constraint "swap_ft_ft_chain_ft_contract_foreign";');

    this.addSql('alter table "interested_nft_attributes" drop constraint "interested_nft_attributes_interested_nft_id_foreign";');

    this.addSql('alter table "interested_nft" drop constraint "interested_nft_collection_contract_collection_chain_foreign";');

    this.addSql('alter table "kollection_attributes" drop constraint "kollection_attributes_kollection_contract_kollect_9a74b_foreign";');

    this.addSql('alter table "nft" drop constraint "nft_collection_contract_collection_chain_foreign";');

    this.addSql('alter table "offer" drop constraint "offer_collection_offer_contract_collection_offer_chain_foreign";');

    this.addSql('alter table "interested_nft" drop constraint "interested_nft_listing_id_foreign";');

    this.addSql('alter table "listing_ft" drop constraint "listing_ft_listing_id_foreign";');

    this.addSql('alter table "listing_interested_fts" drop constraint "listing_interested_fts_listing_id_foreign";');

    this.addSql('alter table "listing_nft" drop constraint "listing_nft_listing_id_foreign";');

    this.addSql('alter table "offer_listing_offers" drop constraint "offer_listing_offers_listing_id_foreign";');

    this.addSql('alter table "reservation" drop constraint "reservation_listing_id_foreign";');

    this.addSql('alter table "swap" drop constraint "swap_listing_id_foreign";');

    this.addSql('alter table "deposit_nft" drop constraint "deposit_nft_nft_collection_contract_nft_collectio_364bf_foreign";');

    this.addSql('alter table "listing_nft" drop constraint "listing_nft_nft_collection_contract_nft_collectio_6bd58_foreign";');

    this.addSql('alter table "nft_attributes" drop constraint "nft_attributes_nft_collection_contract_nft_collec_0d8d6_foreign";');

    this.addSql('alter table "nft_offer" drop constraint "nft_offer_nft_collection_contract_nft_collection__ca40d_foreign";');

    this.addSql('alter table "remaining_nft" drop constraint "remaining_nft_nft_collection_contract_nft_collect_db662_foreign";');

    this.addSql('alter table "reservation" drop constraint "reservation_position_nft_collection_contract_posi_f25c0_foreign";');

    this.addSql('alter table "shipment" drop constraint "shipment_nft_collection_contract_nft_collection_c_67f38_foreign";');

    this.addSql('alter table "swap_nft" drop constraint "swap_nft_nft_collection_contract_nft_collection_c_26555_foreign";');

    this.addSql('alter table "nft_offer" drop constraint "nft_offer_offer_id_foreign";');

    this.addSql('alter table "offer_listing_offers" drop constraint "offer_listing_offers_offer_id_foreign";');

    this.addSql('alter table "reservation" drop constraint "reservation_offer_id_foreign";');

    this.addSql('alter table "swap" drop constraint "swap_offer_id_foreign";');

    this.addSql('alter table "deposit_ft" drop constraint "deposit_ft_reservation_id_foreign";');

    this.addSql('alter table "deposit_nft" drop constraint "deposit_nft_reservation_id_foreign";');

    this.addSql('alter table "remaining_ft" drop constraint "remaining_ft_reservation_id_foreign";');

    this.addSql('alter table "remaining_nft" drop constraint "remaining_nft_reservation_id_foreign";');

    this.addSql('alter table "swap_ft" drop constraint "swap_ft_swap_id_foreign";');

    this.addSql('alter table "swap_nft" drop constraint "swap_nft_swap_id_foreign";');

    this.addSql('create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null default \'abc@nfi.com\', "balance" int not null default 0);');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

    this.addSql('drop table if exists "account" cascade;');

    this.addSql('drop table if exists "attribute" cascade;');

    this.addSql('drop table if exists "deposit_ft" cascade;');

    this.addSql('drop table if exists "deposit_nft" cascade;');

    this.addSql('drop table if exists "ft" cascade;');

    this.addSql('drop table if exists "interested_nft" cascade;');

    this.addSql('drop table if exists "interested_nft_attributes" cascade;');

    this.addSql('drop table if exists "kollection" cascade;');

    this.addSql('drop table if exists "kollection_attributes" cascade;');

    this.addSql('drop table if exists "listing" cascade;');

    this.addSql('drop table if exists "listing_ft" cascade;');

    this.addSql('drop table if exists "listing_interested_fts" cascade;');

    this.addSql('drop table if exists "listing_nft" cascade;');

    this.addSql('drop table if exists "nft" cascade;');

    this.addSql('drop table if exists "nft_attributes" cascade;');

    this.addSql('drop table if exists "nft_offer" cascade;');

    this.addSql('drop table if exists "offer" cascade;');

    this.addSql('drop table if exists "offer_listing_offers" cascade;');

    this.addSql('drop table if exists "remaining_ft" cascade;');

    this.addSql('drop table if exists "remaining_nft" cascade;');

    this.addSql('drop table if exists "reservation" cascade;');

    this.addSql('drop table if exists "shipment" cascade;');

    this.addSql('drop table if exists "stream" cascade;');

    this.addSql('drop table if exists "swap" cascade;');

    this.addSql('drop table if exists "swap_ft" cascade;');

    this.addSql('drop table if exists "swap_nft" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "account" ("address" varchar not null default null, constraint "account_pkey" primary key ("address"));');

    this.addSql('create table "attribute" ("trait_type" varchar not null default null, "value" varchar not null default null, constraint "attribute_pkey" primary key ("trait_type", "value"));');

    this.addSql('create table "deposit_ft" ("id" serial primary key, "ft_chain" int8 not null default null, "ft_contract" varchar not null default null, "amount" varchar not null default null, "reservation_id" int4 not null default null);');

    this.addSql('create table "deposit_nft" ("id" serial primary key, "nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null, "reservation_id" int4 not null default null);');

    this.addSql('create table "ft" ("chain" int8 not null default null, "contract" varchar not null default null, constraint "ft_pkey" primary key ("chain", "contract"));');

    this.addSql('create table "interested_nft" ("id" serial primary key, "listing_id" int4 not null default null, "collection_contract" varchar not null default null, "collection_chain" int8 not null default null);');

    this.addSql('create table "interested_nft_attributes" ("interested_nft_id" int4 not null default null, "attribute_trait_type" varchar not null default null, "attribute_value" varchar not null default null, constraint "interested_nft_attributes_pkey" primary key ("interested_nft_id", "attribute_trait_type", "attribute_value"));');

    this.addSql('create table "kollection" ("contract" varchar not null default null, "chain" int8 not null default null, "name" varchar not null default null, "is_postion_collection" bool not null default false, constraint "kollection_pkey" primary key ("contract", "chain"));');

    this.addSql('create table "kollection_attributes" ("kollection_contract" varchar not null default null, "kollection_chain" int8 not null default null, "attribute_trait_type" varchar not null default null, "attribute_value" varchar not null default null, constraint "kollection_attributes_pkey" primary key ("kollection_contract", "kollection_chain", "attribute_trait_type", "attribute_value"));');

    this.addSql('create table "listing" ("id" serial primary key, "is_active" bool not null default true, "created_time" timestamptz not null default null, "end_time" timestamptz not null default null, "duration" int4 not null default null, "closed_time" timestamptz null default null, "created_by_address" varchar not null default null, "swapnow_count" int4 not null default 0, "reservation_count" int4 not null default 0, "nfts_count" int4 not null default 0, "fts_count" int4 not null default 0, "signature" varchar not null default null);');

    this.addSql('create table "listing_ft" ("id" serial primary key, "listing_id" int4 not null default null, "ft_chain" int8 not null default null, "ft_contract" varchar not null default null, "amount" varchar not null default null);');

    this.addSql('create table "listing_interested_fts" ("listing_id" int4 not null default null, "ft_chain" int8 not null default null, "ft_contract" varchar not null default null, constraint "listing_interested_fts_pkey" primary key ("listing_id", "ft_chain", "ft_contract"));');

    this.addSql('create table "listing_nft" ("id" serial primary key, "listing_id" int4 not null default null, "nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null);');

    this.addSql('create table "nft" ("collection_contract" varchar not null default null, "collection_chain" int8 not null default null, "token" varchar not null default null, "image_url" varchar not null default null, "name" varchar not null default null, "description" varchar null default null, constraint "nft_pkey" primary key ("collection_contract", "collection_chain", "token"));');

    this.addSql('create table "nft_attributes" ("nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null, "attribute_trait_type" varchar not null default null, "attribute_value" varchar not null default null, constraint "nft_attributes_pkey" primary key ("nft_collection_contract", "nft_collection_chain", "nft_token", "attribute_trait_type", "attribute_value"));');

    this.addSql('create table "nft_offer" ("id" serial primary key, "offer_id" int4 not null default null, "nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null);');

    this.addSql('create table "offer" ("id" serial primary key, "is_active" bool not null default true, "created_time" timestamptz not null default null, "end_time" timestamptz not null default null, "closed_time" timestamptz null default null, "signature" varchar not null default null, "duration" int4 not null default null, "swapnow_count" int4 not null default 0, "reservation_count" int4 not null default 0, "created_by_address" varchar not null default null, "collection_offer_contract" varchar null default null, "collection_offer_chain" int8 null default null);');

    this.addSql('create table "offer_listing_offers" ("offer_id" int4 not null default null, "listing_id" int4 not null default null, constraint "offer_listing_offers_pkey" primary key ("offer_id", "listing_id"));');

    this.addSql('create table "remaining_ft" ("id" serial primary key, "ft_chain" int8 not null default null, "ft_contract" varchar not null default null, "amount" varchar not null default null, "reservation_id" int4 not null default null);');

    this.addSql('create table "remaining_nft" ("id" serial primary key, "nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null, "reservation_id" int4 not null default null);');

    this.addSql('create table "reservation" ("id" serial primary key, "listing_id" int4 null default null, "offer_id" int4 null default null, "is_active" bool not null default true, "started_time" timestamptz null default null, "end_time" timestamptz null default null, "duration" int4 not null default null, "position_nft_collection_contract" varchar null default null, "position_nft_collection_chain" int8 null default null, "position_nft_token" varchar null default null);');
    this.addSql('alter table "reservation" add constraint "reservation_position_nft_collection_contract_posit_ff4fd_unique" unique ("position_nft_collection_contract", "position_nft_collection_chain", "position_nft_token");');

    this.addSql('create table "shipment" ("nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null, "account_address" varchar not null default null, "quantity" int4 not null default null, constraint "shipment_pkey" primary key ("nft_collection_contract", "nft_collection_chain", "nft_token", "account_address"));');

    this.addSql('create table "stream" ("stream_id" varchar not null default null, "chain" varchar not null default null, "type" varchar not null default null, constraint "stream_pkey" primary key ("stream_id", "chain"));');

    this.addSql('create table "swap" ("id" serial primary key, "is_active" bool not null default true, "closed_time" timestamptz null default null, "listing_id" int4 null default null, "offer_id" int4 null default null);');

    this.addSql('create table "swap_ft" ("id" serial primary key, "ft_chain" int8 not null default null, "ft_contract" varchar not null default null, "amount" varchar not null default null, "swap_id" int4 not null default null);');

    this.addSql('create table "swap_nft" ("id" serial primary key, "nft_collection_contract" varchar not null default null, "nft_collection_chain" int8 not null default null, "nft_token" varchar not null default null, "swap_id" int4 not null default null);');

    this.addSql('alter table "deposit_ft" add constraint "deposit_ft_ft_chain_ft_contract_foreign" foreign key ("ft_chain", "ft_contract") references "ft" ("chain", "contract") on update cascade on delete no action;');
    this.addSql('alter table "deposit_ft" add constraint "deposit_ft_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "deposit_nft" add constraint "deposit_nft_nft_collection_contract_nft_collectio_364bf_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');
    this.addSql('alter table "deposit_nft" add constraint "deposit_nft_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "interested_nft" add constraint "interested_nft_collection_contract_collection_chain_foreign" foreign key ("collection_contract", "collection_chain") references "kollection" ("contract", "chain") on update cascade on delete cascade;');
    this.addSql('alter table "interested_nft" add constraint "interested_nft_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "interested_nft_attributes" add constraint "interested_nft_attributes_attribute_trait_type_at_114a5_foreign" foreign key ("attribute_trait_type", "attribute_value") references "attribute" ("trait_type", "value") on update cascade on delete cascade;');
    this.addSql('alter table "interested_nft_attributes" add constraint "interested_nft_attributes_interested_nft_id_foreign" foreign key ("interested_nft_id") references "interested_nft" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "kollection_attributes" add constraint "kollection_attributes_attribute_trait_type_attrib_85a42_foreign" foreign key ("attribute_trait_type", "attribute_value") references "attribute" ("trait_type", "value") on update cascade on delete cascade;');
    this.addSql('alter table "kollection_attributes" add constraint "kollection_attributes_kollection_contract_kollect_9a74b_foreign" foreign key ("kollection_contract", "kollection_chain") references "kollection" ("contract", "chain") on update cascade on delete cascade;');

    this.addSql('alter table "listing" add constraint "listing_created_by_address_foreign" foreign key ("created_by_address") references "account" ("address") on update cascade on delete no action;');

    this.addSql('alter table "listing_ft" add constraint "listing_ft_ft_chain_ft_contract_foreign" foreign key ("ft_chain", "ft_contract") references "ft" ("chain", "contract") on update cascade on delete cascade;');
    this.addSql('alter table "listing_ft" add constraint "listing_ft_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "listing_interested_fts" add constraint "listing_interested_fts_ft_chain_ft_contract_foreign" foreign key ("ft_chain", "ft_contract") references "ft" ("chain", "contract") on update cascade on delete cascade;');
    this.addSql('alter table "listing_interested_fts" add constraint "listing_interested_fts_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "listing_nft" add constraint "listing_nft_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "listing_nft" add constraint "listing_nft_nft_collection_contract_nft_collectio_6bd58_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');

    this.addSql('alter table "nft" add constraint "nft_collection_contract_collection_chain_foreign" foreign key ("collection_contract", "collection_chain") references "kollection" ("contract", "chain") on update cascade on delete cascade;');

    this.addSql('alter table "nft_attributes" add constraint "nft_attributes_attribute_trait_type_attribute_value_foreign" foreign key ("attribute_trait_type", "attribute_value") references "attribute" ("trait_type", "value") on update cascade on delete cascade;');
    this.addSql('alter table "nft_attributes" add constraint "nft_attributes_nft_collection_contract_nft_collec_0d8d6_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');

    this.addSql('alter table "nft_offer" add constraint "nft_offer_nft_collection_contract_nft_collection__ca40d_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');
    this.addSql('alter table "nft_offer" add constraint "nft_offer_offer_id_foreign" foreign key ("offer_id") references "offer" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "offer" add constraint "offer_collection_offer_contract_collection_offer_chain_foreign" foreign key ("collection_offer_contract", "collection_offer_chain") references "kollection" ("contract", "chain") on update cascade on delete cascade;');
    this.addSql('alter table "offer" add constraint "offer_created_by_address_foreign" foreign key ("created_by_address") references "account" ("address") on update cascade on delete no action;');

    this.addSql('alter table "offer_listing_offers" add constraint "offer_listing_offers_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "offer_listing_offers" add constraint "offer_listing_offers_offer_id_foreign" foreign key ("offer_id") references "offer" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "remaining_ft" add constraint "remaining_ft_ft_chain_ft_contract_foreign" foreign key ("ft_chain", "ft_contract") references "ft" ("chain", "contract") on update cascade on delete no action;');
    this.addSql('alter table "remaining_ft" add constraint "remaining_ft_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "remaining_nft" add constraint "remaining_nft_nft_collection_contract_nft_collect_db662_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');
    this.addSql('alter table "remaining_nft" add constraint "remaining_nft_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "reservation" add constraint "reservation_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "reservation" add constraint "reservation_offer_id_foreign" foreign key ("offer_id") references "offer" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "reservation" add constraint "reservation_position_nft_collection_contract_posi_f25c0_foreign" foreign key ("position_nft_collection_contract", "position_nft_collection_chain", "position_nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete set null;');

    this.addSql('alter table "shipment" add constraint "shipment_account_address_foreign" foreign key ("account_address") references "account" ("address") on update cascade on delete no action;');
    this.addSql('alter table "shipment" add constraint "shipment_nft_collection_contract_nft_collection_c_67f38_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');

    this.addSql('alter table "swap" add constraint "swap_listing_id_foreign" foreign key ("listing_id") references "listing" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "swap" add constraint "swap_offer_id_foreign" foreign key ("offer_id") references "offer" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "swap_ft" add constraint "swap_ft_ft_chain_ft_contract_foreign" foreign key ("ft_chain", "ft_contract") references "ft" ("chain", "contract") on update cascade on delete no action;');
    this.addSql('alter table "swap_ft" add constraint "swap_ft_swap_id_foreign" foreign key ("swap_id") references "swap" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "swap_nft" add constraint "swap_nft_nft_collection_contract_nft_collection_c_26555_foreign" foreign key ("nft_collection_contract", "nft_collection_chain", "nft_token") references "nft" ("collection_contract", "collection_chain", "token") on update cascade on delete cascade;');
    this.addSql('alter table "swap_nft" add constraint "swap_nft_swap_id_foreign" foreign key ("swap_id") references "swap" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}
